# Stage 1: Build the application
FROM mcr.microsoft.com/dotnet/sdk:9.0.100-preview.2-bookworm-slim AS build
WORKDIR /app

# Copy csproj and restore as distinct layers
COPY ["Hospital_API.csproj", "./"]
RUN dotnet restore

# Copy everything else and build
COPY . ./
RUN dotnet publish "Hospital_API.csproj" -c Release -o /app/publish

# Stage 2: Create the runtime image
FROM mcr.microsoft.com/dotnet/aspnet:9.0.0-preview.2-bookworm-slim AS final
WORKDIR /app

# Copy the published files
COPY --from=build /app/publish .

# Ensure appsettings files are copied
COPY ["appsettings.json", "appsettings.Development.json", "./"]

# Set environment variables
ENV ASPNETCORE_URLS=http://+:8080
ENV DOTNET_SYSTEM_GLOBALIZATION_INVARIANT=1

EXPOSE 8080

# Set the entry point
ENTRYPOINT ["dotnet", "Hospital_API.dll"] 