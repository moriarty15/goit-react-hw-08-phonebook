export async function fetchRequest() {
  try {
    const data = await fetch(
      "https://61984aee164fa60017c22ff5.mockapi.io/contacts/contacts"
    );
    const json = await data.json();
    return json;
  } catch (error) {
    alert(error);
  }
}

export async function postContact({ name, number }) {
  try {
    const data = await fetch(
      "https://61984aee164fa60017c22ff5.mockapi.io/contacts/contacts",
      {
        method: "POST",
        body: JSON.stringify({
          Phone: number,
          name,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const responce = await data.json();
    return responce;
  } catch (error) {
    alert(error);
  }
}

export async function deleteContact(id) {
  try {
    const data = await fetch(
      `https://61984aee164fa60017c22ff5.mockapi.io/contacts/contacts/${id}`,
      {
        method: "DELETE",
      }
      );
      return data;
  } catch (error) {
    alert(error);
  }
}
