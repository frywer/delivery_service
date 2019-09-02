class DeliveriesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_delivery, only: [:show, :update, :destroy]
  before_action :require_admin!, only: [:index, :destroy, :update]

  # GET /deliveries.json
  def index
    @deliveries = Delivery.all
    respond_to(&:json)
  end

  # GET /deliveries/1.json
  def show
    respond_to(&:json)
  end

  # POST /deliveries.json
  def create
    @delivery = Delivery.new(delivery_params)

    respond_to do |format|
      if @delivery.save
        format.json { render :show, status: :created, location: @delivery }
      else
        format.json { render json: @delivery.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /deliveries/1.json
  def update
    respond_to do |format|
      if @delivery.update(delivery_params)
        format.json { render :show, status: :ok, location: @delivery }
      else
        format.json { render json: @delivery.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /deliveries/1.json
  def destroy
    @delivery.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_delivery
      @delivery = Delivery.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def delivery_params
      params.require(:delivery).permit(:from_user_id, :to_user_id, :item, :delivery_address, :status)
    end
end
