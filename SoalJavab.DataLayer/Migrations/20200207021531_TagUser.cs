using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SoalJavab.DataLayer.Migrations
{
    public partial class TagUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "oldLoggedIn",
                table: "Users",
                newName: "OldLoggedIn");

            migrationBuilder.CreateTable(
                name: "TagUsers",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    TagId = table.Column<long>(nullable: false),
                    Isdeleted = table.Column<bool>(nullable: false),
                    userId = table.Column<long>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TagUsers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TagUsers_Tags_TagId",
                        column: x => x.TagId,
                        principalTable: "Tags",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TagUsers_Users_userId",
                        column: x => x.userId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_TagUsers_TagId",
                table: "TagUsers",
                column: "TagId");

            migrationBuilder.CreateIndex(
                name: "IX_TagUsers_userId",
                table: "TagUsers",
                column: "userId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TagUsers");

            migrationBuilder.RenameColumn(
                name: "OldLoggedIn",
                table: "Users",
                newName: "oldLoggedIn");
        }
    }
}
