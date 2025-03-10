import os
from backend.src.server import EmployeeAPI

script_dir = os.path.dirname(__file__)
file_path = os.path.join(script_dir, "mock_employees.json")

global_employee_api = EmployeeAPI(file_path)


def test_get_employee_by_id_exists():
    result = global_employee_api.get_employee_by_id(1)
    assert result["id"] == 1
    assert result["name"] == "John Doe"

    result = global_employee_api.get_employee_by_id(2)
    assert result["id"] == 2
    assert result["name"] == "Jane Smith"


def test_get_employee_by_id_doesnt_exist():
    result = global_employee_api.get_employee_by_id(3)
    assert result == {}
    result = global_employee_api.get_employee_by_id(-1)
    assert result == {}


def test_get_employees():
    result = global_employee_api.get_employees()
    assert len(result) == 2
    assert result[0]["id"] == 1
    assert result[0]["name"] == "John Doe"
    assert result[1]["id"] == 2
    assert result[1]["name"] == "Jane Smith"
