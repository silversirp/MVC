Feature: View item details

  As a logged in user
  I want to see an item's details (name, image, description)
  So that I can make an informed decision about purchasing it.

  Scenario: Successfully view item details
    Given I am a logged in user
    And I am on the homepage
    When I click on an item
    Then I should be able to see the item's name, image, and description

  Scenario: Unsuccessfully view item details
    Given I am a logged in user
    And I am on the homepage
    When I click on a non-existent item
    Then I should see an error message
    And I should not be able to see any item details

  Scenario: Unauthorized view of item details
    Given I am a logged in user
    And I am on the homepage
    And the item exists
    And I am not authorized to view the item
    When I click on the item
    Then I should see a 403 Forbidden error message
    And I should not be able to see any item details
