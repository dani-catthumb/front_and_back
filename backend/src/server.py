from typing import Any
from flask import Flask
from flask_cors import CORS
import json
import os


class EmployeeAPI:

    def __init__(self, file_path: str | None = None):
        if file_path is None:
            script_dir = os.path.dirname(__file__)
            self.file_path = os.path.join(script_dir, "employees.json")
        else:
            self.file_path = file_path

    def get_employees(self) -> Any:
        try:
            employees = self._get_json_from_source()
            return employees
        except:
            return {}

    def get_employee_by_id(self, id: int) -> Any:
        try:
            if id <= 0:
                return {}

            employee = self._get_employee_by_id(id)

            return employee
        except:
            return {}

    def _get_json_from_source(self) -> Any:
        with open(self.file_path, "r") as json_file:
            employees = json.load(json_file)
        return employees

    def _get_employee_by_id(self, id: int) -> Any:
        employees = self._get_json_from_source()
        employee = employees[int(id) - 1]

        return employee


if __name__ == "__main__":
    employee_api = EmployeeAPI()

    app = Flask(__name__)
    CORS(app, origins="*")
    app.add_url_rule(
        "/api/list", view_func=employee_api.get_employees, methods=["GET"]
    )
    app.add_url_rule(
        "/api/list/<int:id>",
        view_func=employee_api.get_employee_by_id,
        methods=["GET"],
    )
    app.run(host="0.0.0.0", port=5000)
