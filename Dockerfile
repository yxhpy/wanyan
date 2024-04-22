# 使用Python作为基础镜像
FROM python:3.10
# 设置工作目录
WORKDIR /app
# 复制应用代码到容器中
COPY . /app
# 安装依赖项
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install uWSGI
# 暴露应用端口
EXPOSE 5000
# 设置启动命令
#CMD ["gunicorn", "app:app", "-c", "./gunicorn.conf.py", "-t", "0"]
CMD ["uwsgi", "--socket", "0.0.0.0:5000", "--protocol=http", "-w", "app:app"]
