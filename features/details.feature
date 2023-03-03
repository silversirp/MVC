Feature: View item details
  As a logged in user, I want to see an item's details (name, image, description)

  Scenario: User views an item's details
    Given that I am a logged in user
    When I navigate to the "Items" page
    And I click on an item
    Then I should see the item's name, image, and description
