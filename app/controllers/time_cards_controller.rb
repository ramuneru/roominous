class TimeCardsController < ApplicationController
  # before_action :set_students_data, only[:create]

  def new
    @time = Timecard.new
  end

  def create
    @time = Timecard.new()
  end

  private
  def set_students_data
    

  end



end
