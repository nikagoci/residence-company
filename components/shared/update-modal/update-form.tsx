import { Dispatch, SetStateAction, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { FieldError, FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Select from "../select";
import { schema } from "@/libs/update-schema";
import { UPDATE_FLAT } from "@/libs/graphql/queries";
import Input from "./input";
import { Condition } from "@/enumType";

function createFlatObject(flatInfo: FlatInfo) {
  const { price, livingArea, balconies, bedrooms, wetPoints } = flatInfo;

  interface FlatObject {
    price: number;
    livingArea: number;
    balconies: { [key: string]: number };
    bedrooms: { [key: string]: number };
    wetPoints: { [key: string]: number };
  }

  const flatObject: FlatObject = {
    price,
    livingArea,
    balconies: {},
    bedrooms: {},
    wetPoints: {},
  };

  // Copy balcony data
  let balconyCount = 1;
  for (const key in balconies) {
    flatObject.balconies[`balcony${balconyCount}`] = balconies[key];
    balconyCount++;
  }

  // Copy bedroom data
  let bedroomCount = 1;
  for (const key in bedrooms) {
    flatObject.bedrooms[`bedroom${bedroomCount}`] = bedrooms[key];
    bedroomCount++;
  }

  // Copy wet point data
  let wetPointCount = 1;
  for (const key in wetPoints) {
    flatObject.wetPoints[`wetPoint${wetPointCount}`] = wetPoints[key];
    wetPointCount++;
  }

  return flatObject;
}

type FlatInfo = {
  livingArea: number;
  price: number;
  balconies: number[];
  bedrooms: number[];
  wetPoints: number[];
  condition: Condition;
  [key: string]: number[] | number | Condition;
};

type Props = {
  flatInfo: FlatInfo;
  removeProperty: (value: string, index: number) => void;
  flatNum: number;
  setSuccess: Dispatch<SetStateAction<boolean>>;
};

type UpdateFlat = {
  livingArea: number;
  balconies: number[];
  bedrooms: number[];
  wetPoints: number[];
  price: number;
  condition: Condition;
  flatNum: number;
};

const UpdateForm = ({
  flatInfo,
  removeProperty,
  flatNum,
  setSuccess,
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(schema),
    defaultValues: createFlatObject(flatInfo),
  });

  const { t } = useTranslation();
  const { locale } = useRouter();

  const [updateFlat, { data, loading }] = useMutation<UpdateFlat>(UPDATE_FLAT);

  useEffect(() => {
    if (!loading && data) {
      setSuccess(true);
    }
  }, [data, loading]);

  const onSubmit = (inputValues: FieldValues) => {
    console.log(inputValues);
    const balconies = [inputValues.balconies].map((obj) =>
      Object.values(obj)
    )[0];
    const bedrooms = [inputValues.bedrooms].map((obj) => Object.values(obj))[0];
    const wetPoints = [inputValues.wetPoints].map((obj) =>
      Object.values(obj)
    )[0];
    const { livingArea, condition, price } = inputValues;

    updateFlat({
      variables: {
        balconies,
        bedrooms,
        wetPoints,
        livingArea,
        condition,
        price,
        flatNum,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className={`${
          locale === "en" ? "text-lg" : "text-xs"
        } grid sm:grid-cols-2 grid-cols-1 gap-2 sm:gap-12 py-6 font-bold `}
      >
        <div className="flex items-center justify-between sm:justify-start gap-x-3 ">
          <label htmlFor="condition">
            {t("floor.update-modal.form.condition")}:
          </label>
          <Select
            options={["sale", "sold"]}
            id="condition"
            register={register}
            primaryValue={flatInfo.condition}
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="livingArea">
            {t("floor.update-modal.form.living-area")}:
          </label>
          <Input
            error={errors?.livingArea}
            id="livingArea"
            register={register}
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="price">{t("floor.update-modal.form.price")}</label>
          <Input error={errors?.price} id="price" register={register} />
        </div>
        {flatInfo?.balconies.map((baclony, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <label htmlFor="balcony">
              {t("floor.update-modal.form.balcony")}
            </label>
            <Input
              name="balconies"
              removable={flatInfo.balconies.length > 1}
              index={idx}
              removeProperty={removeProperty}
              id={`balconies.balcony${idx + 1}`}
              register={register}
              error={
                errors?.balconies &&
                (errors?.balconies[
                  `balcony${idx + 1}` as keyof (typeof errors)["balconies"]
                ] as FieldError)
              }
            />
          </div>
        ))}
        {flatInfo.bedrooms.map((bedroom, idx) => (
          <div key={idx} className="flex items-center justify-between ">
            <label htmlFor={`bedroom${idx}`}>
              {t("floor.update-modal.form.bedroom")}
            </label>
            <Input
              name="bedrooms"
              removable={flatInfo.bedrooms.length > 1}
              index={idx}
              removeProperty={removeProperty}
              id={`bedrooms.bedroom${idx + 1}`}
              register={register}
              error={
                errors?.bedrooms &&
                (errors?.bedrooms[
                  `bedroom${idx + 1}` as keyof (typeof errors)["bedrooms"]
                ] as FieldError)
              }
            />
          </div>
        ))}
        {flatInfo.wetPoints.map((wetPoint, idx) => (
          <div key={idx} className="flex items-center justify-between ">
            <label htmlFor={`wetPoint${idx}`}>
              {t("floor.update-modal.form.wetpoint")}
            </label>
            <Input
              name="wetPoints"
              removable={flatInfo.wetPoints.length > 1}
              index={idx}
              removeProperty={removeProperty}
              id={`wetPoints.wetPoint${idx + 1}`}
              register={register}
              error={
                errors?.wetPoints &&
                (errors?.wetPoints[
                  `wetPoint${idx + 1}` as keyof (typeof errors)["wetPoints"]
                ] as FieldError)
              }
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-5 sm:mt-6">
        <button
          type="submit"
          className="inline-flex justify-center px-6 py-2 text-lg font-medium text-white border border-transparent rounded-md shadow-sm bg-light_purple hover:bg-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple "
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default UpdateForm;
