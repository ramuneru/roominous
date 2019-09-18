class CreateTimeCards < ActiveRecord::Migration[5.2]
  def change
    create_table :time_cards do |t|
      t.date     :date
      t.datetime :in_at
      t.datetime :out_at

      t.references  :student, foreign_key: true

      t.timestamps
    end
  end
end
