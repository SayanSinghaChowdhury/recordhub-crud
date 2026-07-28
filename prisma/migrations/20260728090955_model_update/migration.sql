/*
  Warnings:

  - You are about to drop the `userRecord` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "userRecord";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "UserRecord" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fullname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "UserRecord_email_key" ON "UserRecord"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserRecord_phone_key" ON "UserRecord"("phone");
