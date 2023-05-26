import { Condition } from "@/fakeData";
import { useRouter } from "next/router";

type Props = {
  flat: Flat;
};

const SingleRow = ({ flat }: Props) => {
  const router = useRouter()

  const handlePageChange = () => {
    router.push({
      pathname: `/residence/floor/${flat.floor}`,
      query: { flat: flat.flatNum }
    })
  }

  return (
    <tr className="bg-white">
      <td className="px-6 py-6 text-sm font-normal text-center whitespace-nowrap">
        {flat.floor}
      </td>
      <td className="px-6 py-6 text-sm font-normal text-center whitespace-nowrap">
        {flat.flatNum}
      </td>
      <td className="px-6 py-6 text-sm font-normal text-center whitespace-nowrap">
        {flat.livingArea}{" "}
        <span className="text-sm">
          m <sup className="-m-1 text-xs">2</sup>
        </span>
      </td>
      <td className="px-6 py-4 text-sm font-normal text-center whitespace-nowrap">
        <p>
          3{" "}
          <span className="text-sm">
            m <sup className="-m-1 text-xs">2</sup>{" "}
          </span>
        </p>
      </td>
      <td className="px-6 py-4 text-sm font-normal text-center whitespace-nowrap">
        ${flat.price}
      </td>
      <td className="px-6 py-4 text-xs font-medium text-center whitespace-nowrap">
        {flat.condition === Condition.sale ? (
          <button onClick={handlePageChange}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5 transform"
            >
              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"></path>
              <path
                fillRule="evenodd"
                d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        ) : (
          <h1 className="text-lg text-red-500">Sold</h1>
        )}
      </td>
    </tr>
  );
};

export default SingleRow;