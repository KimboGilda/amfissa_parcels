class ParcelsController < ApplicationController
  def index
    @parcels = Parcel.all
  end


  def show
    @parcel = Parcel.find(params[:id])
  end
end
