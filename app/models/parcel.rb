class Parcel < ApplicationRecord
  validates :name, presence: true
  validates :kaek, presence: true
  validates :area, presence: true
end