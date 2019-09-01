require 'rails_helper'

RSpec.describe MyController, type: :controller do

  let(:user) { FactoryBot.create(:user) }
  let(:delivery) { FactoryBot.create(:delivery, to_user: user) }

  before(:each) do
    allow_any_instance_of(MyController).
        to receive_messages(authenticate_user!: true, current_user: user)
  end

  it 'GET my #deliveries' do
    get :deliveries, params: { format: :json }
    expect(response).to be_successful
  end

end