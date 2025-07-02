# Stage 1: Build the application
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app

# Copy csproj and restore as distinct layers
COPY ["Hospital_API.csproj", "./"]
RUN dotnet restore

# Copy everything else and build
COPY . ./
RUN dotnet publish "Hospital_API.csproj" -c Release -o /app/publish

# Stage 2: Create the runtime image
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS final
WORKDIR /app

# Set environment variables for .NET runtime
ENV DOTNET_EnableDiagnostics=0
ENV DOTNET_RUNNING_IN_CONTAINER=true
ENV DOTNET_gcServer=1
ENV ASPNETCORE_URLS=http://+:8080
ENV DOTNET_SYSTEM_GLOBALIZATION_INVARIANT=true

# Copy the published files and configuration
COPY --from=build /app/publish .
COPY ["appsettings.json", "appsettings.Development.json", "./"]

EXPOSE 8080

# Set the entry point
ENTRYPOINT ["dotnet", "Hospital_API.dll"] 