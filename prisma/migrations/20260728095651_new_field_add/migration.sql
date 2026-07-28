/*
  Warnings:

  - You are about to drop the column `fullname` on the `UserRecord` table. All the data in the column will be lost.
  - Added the required column `fullName` to the `UserRecord` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `UserRecord` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserRecord" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL
);
INSERT INTO "new_UserRecord" ("address", "email", "id", "phone") SELECT "address", "email", "id", "phone" FROM "UserRecord";
DROP TABLE "UserRecord";
ALTER TABLE "new_UserRecord" RENAME TO "UserRecord";
CREATE UNIQUE INDEX "UserRecord_email_key" ON "UserRecord"("email");
CREATE UNIQUE INDEX "UserRecord_phone_key" ON "UserRecord"("phone");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
