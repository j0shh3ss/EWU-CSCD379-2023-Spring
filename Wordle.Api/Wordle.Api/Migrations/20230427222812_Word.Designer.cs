﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Wordle.Api.Data;

#nullable disable

namespace Wordle.Api.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20230427222812_Word")]
    partial class Word
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Wordle.Api.Data.Word", b =>
            {
                b.Property<int>("WordId")
                    .ValueGeneratedOnAdd()
                    .HasColumnType("int");
                SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("WordId"));
                b.Property<bool>("IsCommon")
                    .HasColumnType("bit");
                b.Property<string>("Text")
                    .IsRequired()
                    .HasColumnType("nvarchar(max)");
                b.HasKey("WordId");
                b.ToTable("Words");
            });
#pragma warning restore 612, 618
        }
    }
}