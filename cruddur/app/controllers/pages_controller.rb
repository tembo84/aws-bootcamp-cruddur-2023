# app/controllers/pages_controller.rb
class PagesController < ApplicationController
    def index
      # Your existing action code goes here if needed
    end
  
    def submit_form
      # Process form submission here
      name = params[:name]
      email = params[:email]
  
      # Create a new Post record using the submitted data
      Post.create(name: name, email: email)
  
      # Redirect to the homepage or any other page after form submission
      redirect_to root_path
    end
  end
  