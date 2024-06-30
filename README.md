# Organisational Grievance Support System

This is a web-based application developed using the MERN stack (MongoDB, Express.js, React, Node.js) designed to provide an organizational grievance support system. The application allows employees to report grievances, track the status of their complaints, and for administrators to manage and resolve these grievances efficiently.

## Features

- **User Authentication**: Secure login and registration for users and administrators.
- **Grievance Reporting**: Employees can submit grievances along with relevant details and documents.
- **Grievance Tracking**: Employees can view the status and history of their grievances.
- **Admin Dashboard**: Administrators can view, update, and resolve grievances.
- **Notifications**: Email notifications for status updates on grievances.
- **Responsive Design**: Mobile-friendly design for accessing the system on various devices.

## Technology Stack

- **Frontend**: React.js, Redux
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Styling**: CSS, Bootstrap

## Installation

### Prerequisites

Make sure you have the following installed:

- Node.js
- MongoDB

### Steps

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/grievance-support-system.git
    cd grievance-support-system
    ```

2. **Install dependencies**:

    - Install server-side dependencies:
        ```bash
        cd backend
        npm install
        ```

    - Install client-side dependencies:
        ```bash
        cd ../frontend
        npm install
        ```

3. **Environment Variables**:

    Create a `.env` file in the `backend` directory and add the following:
    ```plaintext
    PORT=5555
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. **Start the application**:

    - Start the backend server:
        ```bash
        cd backend
        npm start
        ```

    - Start the frontend development server:
        ```bash
        cd ../frontend
        npm start
        ```

    The application will be available at `http://localhost:3000`.

## Usage

- **User Registration and Login**: Users can register and log in to access the system.
- **Submitting Grievances**: Once logged in, users can submit grievances through the "Submit Grievance" form.
- **Viewing Grievances**: Users can view the status and details of their submitted grievances in the "My Grievances" section.
- **Admin Management**: Administrators can log in to access the admin dashboard, where they can view, update, and resolve grievances.

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact [your-email@example.com].

---

Thank you for using the Organisational Grievance Support System! We hope it helps improve the grievance handling process in your organization.

