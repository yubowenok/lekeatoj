import os
import sys

def main():
    if len(sys.argv) < 3:
        return
    # retrieve submission_id
    submission_id = sys.argv[1]
    datadir = '/data/submission/' + submission_id
    os.chdir(datadir)
    
    # copy files to safe location
    safe_dir = '/jail/' + submission_id
    os.mkdir(safe_dir)
    os.system('cp ./* ' + safe_dir + '/')
    
    # for safety reasons
    os.chdir(safe_dir)
    os.system('chroot("/jail")')
    os.system('setuid("uid")')

    # compile and run
    

    

    
    

if __name__ == "__main__":
    main()
