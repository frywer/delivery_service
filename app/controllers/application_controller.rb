class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  protect_from_forgery unless: -> { request.format.json? }

  private

  def require_admin!
    unless current_user.admin?
      render json: {
          errors: 'Page is not permitted'
      }, status: 403
    end
  end

end
