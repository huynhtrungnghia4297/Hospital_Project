# Stage 1: Build the application
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# Copy project file and restore dependencies
COPY ["Hospital_API/Hospital_API.csproj", "Hospital_API/"]
WORKDIR "/src/Hospital_API"
RUN dotnet restore "Hospital_API.csproj"

# Copy the rest of the application's source code
COPY ["Hospital_API/", "."]

# Build and publish the application
RUN dotnet build "Hospital_API.csproj" -c Release --no-restore
RUN dotnet publish "Hospital_API.csproj" -c Release -o /app/publish --no-restore

# Stage 2: Create the final, smaller runtime image
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS final
WORKDIR /app
COPY --from=build /app/publish .

# The convention is to use a non-privileged port inside the container
EXPOSE 8080

# The command to run the application
ENTRYPOINT ["dotnet", "Hospital_API.dll"] 