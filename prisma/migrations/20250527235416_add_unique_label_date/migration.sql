/*
  Warnings:

  - A unique constraint covering the columns `[label,date]` on the table `Event` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Event_label_date_key" ON "Event"("label", "date");
