import { useMutation } from "@apollo/client";
import { FieldError, FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Select from "../select";
import { schema } from "@/libs/update-schema";
import { UPDATE_FLAT } from "@/libs/graphql/queries";
import Input from "./input";
import { Condition } from "@/fakeData";

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
};

const UpdateForm = ({ flatInfo, removeProperty, flatNum }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({ resolver: zodResolver(schema) });

  const [updateFlat] = useMutation(UPDATE_FLAT);

  const onSubmit = (inputValues: FieldValues) => {
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
      <div className="grid grid-cols-2 gap-12 py-6 text-lg font-bold">
        <div className="flex items-center justify-start gap-x-3">
          <label htmlFor="condition">Condition:</label>
          <Select
            options={["sale", "sold"]}
            id="condition"
            register={register}
            primaryValue={flatInfo.condition}
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="livingArea">Living Area:</label>
          <Input
            error={errors?.livingArea}
            value={flatInfo.livingArea}
            id="livingArea"
            register={register}
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="price">Price</label>
          <Input
            error={errors?.price}
            value={flatInfo.price}
            id="price"
            register={register}
          />
        </div>
        {flatInfo.balconies.map((baclony, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <label htmlFor="balcony">Balcony</label>
            <Input
              name="balconies"
              removable={flatInfo.balconies.length > 1}
              index={idx}
              removeProperty={removeProperty}
              value={baclony}
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
            <label htmlFor={`bedroom${idx}`}>Bedroom</label>
            <Input
              name="bedrooms"
              removable={flatInfo.bedrooms.length > 1}
              index={idx}
              removeProperty={removeProperty}
              value={bedroom}
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
            <label htmlFor={`wetPoint${idx}`}>Wet point</label>
            <Input
              name="wetPoints"
              removable={flatInfo.wetPoints.length > 1}
              index={idx}
              removeProperty={removeProperty}
              value={wetPoint}
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
