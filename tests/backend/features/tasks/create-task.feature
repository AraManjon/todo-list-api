Feature: Create a new task
  In order to have tasks in the todo-list
  As a user
  I want to create a new task

  Scenario: A valid non existing task
    Given I send a PUT request to "/tasks/taskId" with body:
    """
    {
        "name": "Title task",
        "description": "Description of the task"
    }
    """
    Then the response status code should be 201
    And the response should be empty