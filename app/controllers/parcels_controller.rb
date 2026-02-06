class ParcelsController < ApplicationController
  def index
    @parcels = Parcel.all
  end

  def show
    @parcel = Parcel.find(params[:id])  
  end

  def new
    @parcel = Parcel.new
  end

  def create
    @parcel = Parcel.new(parcel_params)

    if @parcel.save
      redirect_to parcel_path(@parcel), notice: 'Parcel was successfully created.'
      else
        render :new, status: :unprocessable_entity
    end
  end

  def destroy
    @parcel = Parcel.find(params[:id])
    @parcel.destroy

    redirect_to parcel_path, notice: 'Parcel was successfully deleted'
  end

  private

  def parcel_params
    params.require(:parcel).permit(:name, :kaek, :area)
  end

end
