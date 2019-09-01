require 'rails_helper'

RSpec.describe "Deliveries", type: :request do

  before(:each) do
    allow_any_instance_of(DeliveriesController).
        to receive(:authenticate_user!).and_return(true)
  end

  describe "GET /deliveries" do
    it "works! (now write some real specs)" do
      get deliveries_path(format: :json)
      expect(response).to have_http_status(200)
    end
  end
end
