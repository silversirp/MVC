Feature: Delete item
  As a logged in user, I want to delete an item from the website

  Scenario: User deletes an item
    Given that I am a logged in user
    When I navigate to the "Items" page
    And I select an item to delete
    And I confirm that I want to delete the item
    Then I should see a success message
    And the deleted item should no longer be visible on the "Items" page
