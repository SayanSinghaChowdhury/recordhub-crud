-- CreateTable
CREATE TABLE "userRecord" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fullname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "userRecord_email_key" ON "userRecord"("email");

-- CreateIndex
CREATE UNIQUE INDEX "userRecord_phone_key" ON "userRecord"("phone");
