Feature: Display list of items

  Scenario: User views list of items
    Given that I am a registered user
    When I navigate to the "Items" page
    Then I should see a list of available items
    And each item should have a name
    And the items should be sorted alphabetically by name