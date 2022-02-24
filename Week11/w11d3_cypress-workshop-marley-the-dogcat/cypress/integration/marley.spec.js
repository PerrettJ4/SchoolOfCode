describe("Our to-do-app test", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:3000");
  });

  it("starts with three list items", () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get("li").should("have.length", 3);

    // We can go even further and check that the default todos each contain
    // the correct text. We use the `first` and `last` functions
    // to get just the first and last matched elements individually,
    // and then perform an assertion with `should`.
    cy.get("li").first().should("include.text", "Learn React ");
    cy.get("li").last().should("include.text", "Instigate the singularity");
  });

  it("click changes inner text of list items", () => {
    // We'll click on the "active" button in order to
    // display only incomplete items
    cy.contains("Hide evidence!").click();

    // After filtering, we can assert that there is only the one
    // incomplete item in the list.
    cy.get("li")
      .should("have.length", 3)
      .first()
      .should("include.text", "Smile");

    // For good measure, let's also assert that the task we checked off
    // does not exist on the page.
    cy.contains("Learn React").should("not.exist");
  });

  it("add item to list", () => {
    // We'll click on the "active" button in order to
    // display only incomplete items
    cy.get("input").type("Gib Marley a dog treat");
    cy.contains("Add step").click();

    // After filtering, we can assert that there is only the one
    // incomplete item in the list.
    cy.get("li")
      .should("have.length", 4)
      .last()
      .should("have.text", "Gib Marley a dog treat ❌");

    // For good measure, let's also assert that the task we checked off
    // does not exist on the page.
  });
});
