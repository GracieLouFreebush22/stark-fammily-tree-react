import { Person } from "../../my-app/personType";

export function createStarkTree(): Person {
  const eddardsKids: Person[] = [
    { name: "Rickon", children: [] },
    { name: "Bran", children: [] },
    { name: "Arya", children: [] },
    { name: "Sansa", children: [] },
    { name: "Rob", children: [] },
    { name: "John", children: [] },
  ];

  const rickardsKids: Person[] = [
    { name: "Benjen", children: [] },
    { name: "Lyanna", children: [] },
    { name: "Eddard", children: eddardsKids },
    { name: "Brandon", children: [] },
  ];

  const topPerson: Person = { name: "Rickard", children: rickardsKids };

  return topPerson;
}
//Footer
