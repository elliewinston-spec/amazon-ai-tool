# API Documentation

## Endpoints

### 1. Get Data
- **Endpoint:** `/api/data`
- **Method:** GET
- **Description:** Retrieves data from the server.

#### Request Format:
- **Headers:**
  - `Authorization: Bearer <token>`

#### Response Format:
- **Status Code:** 200 OK
- **Body:**
  ```json
  {
    "data": [
      {
        "id": "1",
        "value": "example"
      }
    ]
  }
  ```

### 2. Post Data
- **Endpoint:** `/api/data`
- **Method:** POST
- **Description:** Sends data to the server.

#### Request Format:
- **Headers:**
  - `Content-Type: application/json`
  - `Authorization: Bearer <token>`
- **Body:**
  ```json
  {
    "value": "example"
  }
  ```

#### Response Format:
- **Status Code:** 201 Created
- **Body:**
  ```json
  {
    "id": "1",
    "message": "Data created"
  }
  ```

### Nano Banana Pro Integration
- **Description:** This integration allows for seamless communication with the Nano Banana Pro service, enabling advanced features and AI capabilities.
- **Details:** Integrate by using the provided API key and following the outlined request formats.

