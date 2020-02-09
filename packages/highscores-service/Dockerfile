FROM mcr.microsoft.com/dotnet/core/sdk as build

WORKDIR /app

COPY *.csproj ./
RUN dotnet restore

COPY . ./
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/core/aspnet
LABEL Author="Brendan McCheese"
WORKDIR /app
COPY --from=build /app/out .
ENTRYPOINT ["dotnet", "highscores-service.dll"]


