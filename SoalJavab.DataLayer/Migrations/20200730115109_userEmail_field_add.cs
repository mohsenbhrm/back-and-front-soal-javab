using Microsoft.EntityFrameworkCore.Migrations;

namespace SoalJavab.DataLayer.Migrations
{
    public partial class userEmail_field_add : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "email",
                table: "Users",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1L,
                columns: new[] { "Passs", "Password" },
                values: new object[] { "121212", "121212" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "email",
                table: "Users");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1L,
                columns: new[] { "Passs", "Password" },
                values: new object[] { "1234", "1234" });
        }
    }
}
