# Blog REST API

Focus Python 3.9( quan trong)

This API is based on python 100% and it is created by django rest framework.

## Steps to run the project

1. Clone the repository
2. Create a virtual environment using command `python -m venv env`
3. Activate virtual enviornment using command
    ```python
    # for Linux
    source env/bin/activate

    # for Windows
    .\env\Scripts\activate (neu bi loi chay dong lenh Set-ExecutionPolicy Bypass -Scope Process hoac chay voi CMD voi quyen Admin)
    ```
4. Install the dependencies using command `pip install -r requirements.txt`
5. Type `source env/bin/activate`
6. Run the server using command `python manage.py makemigrations`
7. Then run the server using command `python manage.py migrate`
8. Finally run the server using command `python manage.py runserver`