require 'rails_helper'

RSpec.describe DeliveriesController, type: :controller do

  let(:sender) { FactoryBot.create(:user) }
  let(:recipient) { FactoryBot.create(:user) }

  let(:valid_attributes) {
    { from_user_id: sender.id, to_user_id: recipient.id, item: 'sample item', delivery_address: 'Ling Rd', status: 'pending' }
  }

  let(:invalid_attributes) {
    { from_user_id: nil, to_user_id: nil, item: 'sample item', delivery_address: 'Ling Rd', status: 'pending' }
  }

  before(:each) do
    allow_any_instance_of(DeliveriesController).
        to receive(:authenticate_user!).and_return(true)
  end

  describe "GET #show" do
    it "returns a success response" do
      delivery = Delivery.create! valid_attributes
      get :show, params: { id: delivery.to_param, format: :json }
      expect(response).to be_successful
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "creates a new Delivery" do
        expect {
          post :create, params: { delivery: valid_attributes, format: :json }
        }.to change(Delivery, :count).by(1)
      end
    end

    context "with invalid params" do
      it "returns a success response (i.e. to display the 'new' template)" do
        post :create, params: { delivery: invalid_attributes, format: :json }
        expect(response).not_to be_successful
      end
    end
  end

  describe 'Admin' do

    let(:admin) { FactoryBot.create(:user, admin: true) }

    before(:each) do
      allow_any_instance_of(DeliveriesController).
          to receive_messages(authenticate_user!: true, current_user: admin)
    end

    describe "GET #index" do
      it "returns a success response" do
        Delivery.create! valid_attributes
        get :index, params: { format: :json }
        expect(response).to be_successful
      end
    end


    describe "PUT #update" do
      context "with valid params" do
        let(:new_attributes) {
          { status: 'delivered'}
        }

        it "updates the requested delivery" do
          delivery = Delivery.create! valid_attributes
          put :update, params: {id: delivery.to_param, delivery: new_attributes, format: :json}
          delivery.reload
        end
      end

      context "with invalid params" do
        it "returns a success response (i.e. to display the 'edit' template)" do
          delivery = Delivery.create! valid_attributes
          put :update, params: { id: delivery.to_param, delivery: invalid_attributes, format: :json }
          expect(response).not_to be_successful
        end
      end
    end

    describe "DELETE #destroy" do
      it "destroys the requested delivery" do
        delivery = Delivery.create! valid_attributes
        expect {
          delete :destroy, params: { id: delivery.to_param, format: :json }
        }.to change(Delivery, :count).by(-1)
      end
    end
  end

end
