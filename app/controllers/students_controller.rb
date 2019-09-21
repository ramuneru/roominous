class StudentsController < ApplicationController
  before_action :authenticate_admin!

  def index
    @students = Student.order("name ASC").limit(10)
  end

  def new
    @student = Student.new
  end

  def create
    @student = Student.create(student_params)

  end

  private
  def student_params
    params.require(:student).permit(:name, :image)
  end


end

  
