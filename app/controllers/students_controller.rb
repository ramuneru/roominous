class StudentsController < ApplicationController
  before_action :authenticate_admin!

  def index
  end

  def new
    @student = Student.new
  end

  def create
    @student = Student.create(name: student_paramas[:name], image: student_params[:image])

  end

  # private
  # def student_paramas
  #   @student.name
  # end


end

  
