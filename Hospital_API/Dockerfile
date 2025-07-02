# Stage 1: Build the application
FROM mcr.microsoft.com/dotnet/sdk:9.0-preview AS build
WORKDIR /app

# Copy csproj and restore as distinct layers
COPY ["Hospital_API.csproj", "./"]
RUN dotnet restore

# Copy everything else and build
COPY . ./
RUN dotnet build "Hospital_API.csproj" -c Release
RUN dotnet publish "Hospital_API.csproj" -c Release -o /app/publish

# Stage 2: Create the runtime image
FROM mcr.microsoft.com/dotnet/aspnet:9.0-preview AS final
WORKDIR /app
COPY --from=build /app/publish .
EXPOSE 8080

# Set the entry point
ENTRYPOINT ["dotnet", "Hospital_API.dll"] 