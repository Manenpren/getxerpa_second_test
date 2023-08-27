# Use the official Python image.
# https://hub.docker.com/_/python
FROM python:3.9

ENV APP_HOME /app

WORKDIR $APP_HOME

# Copy files into the container image.
COPY . .

# Install dependencies.
RUN pip install --no-cache-dir -r requirements.txt

# Run the web service on container startup.
EXPOSE 8080

#CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
