using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OpenApi;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
});




var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();
app.UseCors("AllowAll");

app.MapPost("/api/even-sum", ([FromBody] List<int> numbers) =>
{
    if (numbers == null || !numbers.Any())
    {
        return Results.BadRequest("Input list cannot be null or empty.");
    }

    int sum = numbers.Where(n => n % 2 == 0).Sum();
    return Results.Ok(new { Sum = sum });
})
.WithName("CalculateEvenSum")
.WithOpenApi();

app.Run();