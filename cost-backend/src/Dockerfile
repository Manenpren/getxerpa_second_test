# Use the official Python image.
# https://hub.docker.com/_/python
FROM python:3.9

ENV APP_HOME ../src

WORKDIR $APP_HOME

# Copy files into the container image.
COPY . .

# Install dependencies.
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install django-extensions
RUN pip install djangorestframework
RUN pip install django-cors-headers

# Run the web service on container startup.
EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
