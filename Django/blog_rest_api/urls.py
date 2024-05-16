from django.contrib import admin
from django.urls import path, include

#giao thuc http
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/blog/', include('blog_app.urls')),
    path('api/account/', include('account.urls')),
]
