import React, { useState } from "react";
import { Button, Modal } from "antd";
// import User from "../logic/User";
// import Account from "../logic/Account";
// import db from "../db";
import UserForm from "./UserForm";

export default function BankDashboard() {
  const [showCreateUserModal, setShowCreateUserModal] = useState(false);
  const createUser = () => {
    closeUserModal();
  };

  const closeUserModal = () => setShowCreateUserModal(false);
  return (
    <div>
      <Button onClick={() => setShowCreateUserModal(true)}>Create User </Button>

      <Modal
        title="Create new user"
        visible={showCreateUserModal}
        onOk={createUser}
        onCancel={closeUserModal}
      >
        <UserForm closeModal={closeUserModal} />
      </Modal>
      <Button>Show user</Button>
    </div>
  );
}
