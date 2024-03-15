# Import necessary modules and classes
from flask import request, jsonify
from config import app, db
from models import Contact
from waitress import serve

# Define endpoint to retrieve all contacts
@app.route("/contacts", methods=["GET"])
def get_contacts():
    # Query all contacts from the database
    contacts = Contact.query.all()
    # Convert contacts to JSON format
    json_contacts = list(map(lambda x: x.to_json(), contacts))
    # Return JSON response with contacts
    return jsonify({"contacts": json_contacts})

# Define endpoint to create a new contact
@app.route("/create_contact", methods=["POST"])
def create_contact():
    # Get first_name, last_name, and email from request JSON
    first_name = request.json.get("firstName")
    last_name = request.json.get("lastName")
    email = request.json.get("email")
    # Return an error response if any field is missing
    if not first_name or not last_name or not email:
        return jsonify({"message": "You must include a first name, last name and email"}), 400

    # Create a new Contact object
    new_contact = Contact(first_name=first_name, last_name=last_name, email=email)
    try:
        # Add the new contact to the database
        db.session.add(new_contact)
        # Commit the changes
        db.session.commit()
    except Exception as e:
        # Return an error message if the operation fails
        return jsonify({"message": str(e)}), 400

    # Return a success message
    return jsonify({"message": "User Created!"}), 201

# ... Define other endpoints (update, delete, etc.) ...

# Run the Flask application using Waitress
if __name__ == "__main__":
    # Create the database tables
    with app.app_context():
        db.create_all()

    # Use Waitress as the server
    serve(app, host='0.0.0.0', port=0000)
