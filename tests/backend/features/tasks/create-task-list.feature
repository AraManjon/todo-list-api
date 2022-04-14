Feature: Get tasks 
  As a user
  I want to get tasks

  Scenario: All existing tasks
    Given I send a PUT request to "/tasks/95ecc380-afe9-11e4-9b6c-751b66dd541e" with body:
    """
    {
        "id": "95ecc380-afe9-11e4-9b6c-751b66dd541e",
        "name": "Title task",
        "description": "Description of the task"
    }
    """
    Given I send a PUT request to "/tasks/95ecc380-afe9-11e4-9b6c-751b66dd541e" with body:
    """
    {
        "id": "85ecc380-afe9-11e4-9b6c-751b66dd541e",
        "name": "Title task2",
        "description": "Description of the task2"
    }
    """
    And I send a GET request to "/tasks"
    Then the response status code should be 200
  