import { Person } from "../../my-app/personType";

export function logAllPeopleInTree(topPerson: Person): void {
  const workStack: Person[] = [];
  workStack.push(topPerson);

  while (workStack.length > 0) {
    const currentPerson: Person | undefined = workStack.pop();
    if (currentPerson !== undefined) {
      console.log(currentPerson.name);
      const children: Person[] = currentPerson.children;
      for (const child of children) {
        workStack.push(child);
      }
    }
  }
}

export function logAllPeopleInTreeWithQueue(topPerson: Person): string[] {
  const workStack: Person[] = [];
  const queue: string[] = [];
  workStack.push(topPerson);

  while (workStack.length > 0) {
    const currentPerson: Person | undefined = workStack.shift();
    if (currentPerson !== undefined) {
      queue.unshift(currentPerson.name);
      const children: Person[] = currentPerson.children;
      for (const child of children) {
        workStack.push(child);
      }
    }
  }
  // for (const person of queue) {
  //   console.log(person);
  // }
  return queue;
}

/* *-*-- PSEUDO CODE --*-*
make WORKSTACK = []
push TOP_PERSON to WORKSTACK
make QUEUE = []
WHILE WORKSTACK is NOT EMPTY
CURRENT_PERSON = (shift) "FIRST_PERSON" on WORKSTACK 
UNSHIFT CURRENT_PERSON to the QUEUE
PUSH the CHILDREN (of FIRST_PERSON) to the WORKSTACK, repeat
WHILE LOOP END
console.log the QUEUE (front to back)
*/
export function logIfInTree(targetName: string, topOfTree: Person): string {
  const workStack: Person[] = [];
  workStack.push(topOfTree);
  while (workStack.length > 0) {
    const currentPerson: Person | undefined = workStack.pop();
    if (currentPerson !== undefined) {
      if (currentPerson.name === targetName) {
        return `FOUND ${targetName}`;
      }
      const children: Person[] = currentPerson.children;
      for (const child of children) {
        workStack.push(child);
      }
    }
  }
  return `No such person found: ${targetName}`;
}

export function isDescendant(
  descendantName: string,
  ancestorName: string,
  topOfTree: Person,
): boolean {
  let foundDes = false;
  let foundAnc = false;
  const workStack: Person[] = [];
  workStack.push(topOfTree);

  while (workStack.length > 0) {
    const currentPerson: Person | undefined = workStack.shift();
    if (currentPerson !== undefined) {
      if (currentPerson.name === ancestorName && foundDes === false) {
        foundAnc = true;
      }
      if (currentPerson.name === descendantName) {
        foundDes = true;
        if (foundAnc === false) {
          return false;
        }
      }
      if (foundAnc === true && foundDes === true) {
        return true;
      }
      const children: Person[] = currentPerson.children;
      for (const child of children) {
        workStack.push(child);
      }
    }
  }
  return false;
}