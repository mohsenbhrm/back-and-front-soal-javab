using Microsoft.EntityFrameworkCore.Migrations;

namespace SoalJavab.DataLayer.Migrations
{
    public partial class removeReshteh : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ReshtehUsers_Users_ApplicationUserId",
                table: "ReshtehUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_ReshtehUsers_ZirReshtehs_ZirReshtehId",
                table: "ReshtehUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_Soals_ZirReshtehs_ZirReshtehId",
                table: "Soals");

            migrationBuilder.DropForeignKey(
                name: "FK_Tags_ZirReshtehs_ZirReshtehId",
                table: "Tags");

            migrationBuilder.DropForeignKey(
                name: "FK_ZirReshtehs_Reshtehs_ReshtehId",
                table: "ZirReshtehs");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ZirReshtehs",
                table: "ZirReshtehs");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ReshtehUsers",
                table: "ReshtehUsers");

            migrationBuilder.RenameTable(
                name: "ZirReshtehs",
                newName: "ZirReshteh");

            migrationBuilder.RenameTable(
                name: "ReshtehUsers",
                newName: "ReshtehUser");

            migrationBuilder.RenameIndex(
                name: "IX_ZirReshtehs_ReshtehId",
                table: "ZirReshteh",
                newName: "IX_ZirReshteh_ReshtehId");

            migrationBuilder.RenameIndex(
                name: "IX_ReshtehUsers_ZirReshtehId",
                table: "ReshtehUser",
                newName: "IX_ReshtehUser_ZirReshtehId");

            migrationBuilder.RenameIndex(
                name: "IX_ReshtehUsers_ApplicationUserId",
                table: "ReshtehUser",
                newName: "IX_ReshtehUser_ApplicationUserId");

            migrationBuilder.AlterColumn<long>(
                name: "ZirReshtehId",
                table: "Tags",
                nullable: true,
                oldClrType: typeof(long));

            migrationBuilder.AlterColumn<long>(
                name: "ZirReshtehId",
                table: "Soals",
                nullable: true,
                oldClrType: typeof(long));

            migrationBuilder.AddPrimaryKey(
                name: "PK_ZirReshteh",
                table: "ZirReshteh",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ReshtehUser",
                table: "ReshtehUser",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ReshtehUser_Users_ApplicationUserId",
                table: "ReshtehUser",
                column: "ApplicationUserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ReshtehUser_ZirReshteh_ZirReshtehId",
                table: "ReshtehUser",
                column: "ZirReshtehId",
                principalTable: "ZirReshteh",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Soals_ZirReshteh_ZirReshtehId",
                table: "Soals",
                column: "ZirReshtehId",
                principalTable: "ZirReshteh",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Tags_ZirReshteh_ZirReshtehId",
                table: "Tags",
                column: "ZirReshtehId",
                principalTable: "ZirReshteh",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ZirReshteh_Reshtehs_ReshtehId",
                table: "ZirReshteh",
                column: "ReshtehId",
                principalTable: "Reshtehs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ReshtehUser_Users_ApplicationUserId",
                table: "ReshtehUser");

            migrationBuilder.DropForeignKey(
                name: "FK_ReshtehUser_ZirReshteh_ZirReshtehId",
                table: "ReshtehUser");

            migrationBuilder.DropForeignKey(
                name: "FK_Soals_ZirReshteh_ZirReshtehId",
                table: "Soals");

            migrationBuilder.DropForeignKey(
                name: "FK_Tags_ZirReshteh_ZirReshtehId",
                table: "Tags");

            migrationBuilder.DropForeignKey(
                name: "FK_ZirReshteh_Reshtehs_ReshtehId",
                table: "ZirReshteh");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ZirReshteh",
                table: "ZirReshteh");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ReshtehUser",
                table: "ReshtehUser");

            migrationBuilder.RenameTable(
                name: "ZirReshteh",
                newName: "ZirReshtehs");

            migrationBuilder.RenameTable(
                name: "ReshtehUser",
                newName: "ReshtehUsers");

            migrationBuilder.RenameIndex(
                name: "IX_ZirReshteh_ReshtehId",
                table: "ZirReshtehs",
                newName: "IX_ZirReshtehs_ReshtehId");

            migrationBuilder.RenameIndex(
                name: "IX_ReshtehUser_ZirReshtehId",
                table: "ReshtehUsers",
                newName: "IX_ReshtehUsers_ZirReshtehId");

            migrationBuilder.RenameIndex(
                name: "IX_ReshtehUser_ApplicationUserId",
                table: "ReshtehUsers",
                newName: "IX_ReshtehUsers_ApplicationUserId");

            migrationBuilder.AlterColumn<long>(
                name: "ZirReshtehId",
                table: "Tags",
                nullable: false,
                oldClrType: typeof(long),
                oldNullable: true);

            migrationBuilder.AlterColumn<long>(
                name: "ZirReshtehId",
                table: "Soals",
                nullable: false,
                oldClrType: typeof(long),
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_ZirReshtehs",
                table: "ZirReshtehs",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ReshtehUsers",
                table: "ReshtehUsers",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ReshtehUsers_Users_ApplicationUserId",
                table: "ReshtehUsers",
                column: "ApplicationUserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ReshtehUsers_ZirReshtehs_ZirReshtehId",
                table: "ReshtehUsers",
                column: "ZirReshtehId",
                principalTable: "ZirReshtehs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Soals_ZirReshtehs_ZirReshtehId",
                table: "Soals",
                column: "ZirReshtehId",
                principalTable: "ZirReshtehs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Tags_ZirReshtehs_ZirReshtehId",
                table: "Tags",
                column: "ZirReshtehId",
                principalTable: "ZirReshtehs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ZirReshtehs_Reshtehs_ReshtehId",
                table: "ZirReshtehs",
                column: "ReshtehId",
                principalTable: "Reshtehs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
