import { faker } from "@faker-js/faker";

export type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
  status: "relationship" | "complicated" | "single";
  subRows?: Person[];
  id: string;
};

const range = (len: number) => {
  const arr: number[] = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = (): Person => {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    age: faker.number.int(40),
    visits: faker.number.int(1000),
    progress: faker.number.int(100),
    id: faker.string.uuid(),
    status: faker.helpers.shuffle<Person["status"]>([
      "relationship",
      "complicated",
      "single",
    ])[0]!,
  };
};

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth]!;
    return range(len).map((_d): Person => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}

let data = makeData(1000);

export async function fetchData(
  options: {
    pageIndex: number;
    pageSize: number;
  },
  sortOption: {
    id: string;
    desc: boolean;
  },
  selectedRows: {},
  filter: {}
) {
  // Simulate some network latency
  await new Promise((r) => setTimeout(r, 500));
  console.log(filter);
  if (sortOption.desc) {
    data = data.sort((a: any, b: any) =>
      compareFnDesc(a[sortOption.id], b[sortOption.id])
    );
  } else {
    data = data.sort((a: any, b: any) =>
      compareFnAsc(a[sortOption.id], b[sortOption.id])
    );
  }
  return {
    rows: data.slice(
      options.pageIndex * options.pageSize,
      (options.pageIndex + 1) * options.pageSize
    ),
    pageCount: Math.ceil(data.length / options.pageSize),
    rowCount: data.length,
  };
}

const compareFnDesc = (a: any, b: any) => (a > b ? -1 : 0);
const compareFnAsc = (a: any, b: any) => (a < b ? -1 : 0);
