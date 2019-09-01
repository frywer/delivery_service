class MyController < ApplicationController

  before_action :authenticate_user!, only: [:deliveries]

  def dashboard

  end

  def deliveries
    @deliveries = current_user.deliveries_to
    respond_to(&:json)
  end

end