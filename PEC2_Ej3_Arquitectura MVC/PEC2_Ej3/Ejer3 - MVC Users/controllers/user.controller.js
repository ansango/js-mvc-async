/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */

class UserController {
  constructor(service, view) {
    this.service = service;
    this.view = view;

    // Explicit this binding
    this.service.bindUserChanged(this.onUserChanged);
    this.view.bindAddUser(this.handleAddUser);
    this.view.bindEditUser(this.handleEditUser);
    this.view.bindDeleteUser(this.handleDeleteUser);

    // Display initial todos
    this.onChangedUser(this.service.users);
  }
}
